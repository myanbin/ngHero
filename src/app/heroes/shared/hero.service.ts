import { Injectable } from '@angular/core';

import { Hero } from './hero.model';

@Injectable()
export class HeroService {

  constructor() {}

  getHero(id: string): Promise < Hero > {
    return Promise.resolve({
      "id": "1",
      "name": "宋江",
      "nick": "呼保义",
      "position": "总督兵马大元帅",
      "weapon": "日月星辰旗，混天河洛图",
      "skill": "风云际会，玄天混元阵",
      "detail": "郓城县宋家村人氏。为他面黑身矮，人都唤他做黑宋江；在家大孝，为人仗义疏财，所以又称孝义黑三郎。他刀笔精通，更兼爱习枪棒，学得多种武艺。平生爱结实江湖上的英雄好汉，有人前来投奔，无论何人都细心款待，常替人排忧解难，救死扶伤，名震山东、河北，人们将他比作及时雨。所谓山东呼保义，豪杰宋公明。梁山排名第一。",
    });
  }

}
