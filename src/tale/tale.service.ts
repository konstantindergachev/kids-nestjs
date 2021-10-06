import { Injectable } from '@nestjs/common';

@Injectable()
export class TaleService {
  findAll() {
    return 'Response from findAll service';
  }
}
