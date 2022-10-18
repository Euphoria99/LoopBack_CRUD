// Uncomment these imports to begin using these cool features!

import {get} from '@loopback/rest';

// import {inject} from '@loopback/core';

export class FirstController {
  @get('/firstcontroller')
  hello(): string {
    return 'hello from pavans first controller!';
  }
}
