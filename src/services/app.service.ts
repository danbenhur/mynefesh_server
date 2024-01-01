import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Mynefesh, MynefeshDocument} from "../schemas/mynefesh.schema";

@Injectable()
export class MynefeshService {
  constructor(@InjectModel(Mynefesh.name) private mynefeshModel: Model<MynefeshDocument>) {}

  async create(createMynefeshDto): Promise<Mynefesh> {
    const createdMynefesh = new this.mynefeshModel(createMynefeshDto);
    return createdMynefesh.save();
  }

  async findAll(): Promise<Mynefesh[]> {
    return this.mynefeshModel.find().exec();
  }
}
