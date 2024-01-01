import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class MynefeshResolver {
  @Query(() => String)
  async hello() {
    return 'world';
  }
}
