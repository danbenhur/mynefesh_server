import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MynefeshDocument = Mynefesh & Document;

@Schema()
export class Mynefesh {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const MynefeshSchema = SchemaFactory.createForClass(Mynefesh);
