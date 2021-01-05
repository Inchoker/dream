import { IsNotEmpty } from 'class-validator';

export class UserLoginDto {
  @IsNotEmpty()
  readonly userName: string;

  @IsNotEmpty()
  readonly password: string;
}
