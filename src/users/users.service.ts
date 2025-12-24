import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async createUser(data: Partial<User>) {
    const hashedPassword = await bcrypt.hash(data.password!, 10);

    const user = this.usersRepo.create({
      ...data,
      password: hashedPassword,
    });

    return this.usersRepo.save(user);
  }

  // ✅ LOGIN METHOD
  async login(email: string, password: string) {
    const user = await this.usersRepo.findOne({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // remove password before returning
    const { password: _, ...result } = user;

    return {
      message: 'Login successful',
      user: result,
    };
  }
}
