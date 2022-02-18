import { Injectable } from '@nestjs/common';
import { Bucket } from './dto/bucket.dto';
import { JugBody } from './dto/common.dto';
import { gcd } from './helpers';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  solveProblem(jugbody: JugBody) {
    const { x, y, z } = jugbody

    const bucketOne = new Bucket(x, 'bucket x')
    const bucketTwo = new Bucket(y, 'bucket y')

    if ((z > x && z > y) || (x === y && x !== z)) {
      return "No Solution"
    }

    if ((z % gcd(bucketOne.volume, bucketTwo.volume)) != 0)
      return "No Solution";

    const variantOne = this.pourBucket(bucketOne, bucketTwo, z)
    const variantTwo = this.pourBucket(bucketTwo, bucketOne, z)

    return this.validateResult(variantOne, variantTwo)

  }


  private pourBucket(bucketOne: Bucket, bucketTwo: Bucket, z: number) {
    bucketOne.empty()
    bucketTwo.empty()
    let res: Record<number | string, any> = {}
    const one = bucketOne.name
    const two = bucketTwo.name
    let step: number = 1
    bucketOne.fill()
    res[step] = {}
    res[step][one] = bucketOne.currentVolume
    res[step][two] = bucketTwo.currentVolume
    res[step]['explanation'] = `Fill ${one}`

    while (bucketOne.currentVolume != z && bucketTwo.currentVolume != z && step < 10) {
      bucketOne.transfer(bucketTwo)
      step++
      res[step] = {}
      res[step][one] = bucketOne.currentVolume
      res[step][two] = bucketTwo.currentVolume
      res[step]['explanation'] = `Transfer ${one} to ${two}`

      if (bucketOne.currentVolume == z || bucketTwo.currentVolume == z)
        break;

      if (bucketOne.currentVolume == 0) {
        bucketOne.fill()
        step++;
        res[step] = {}
        res[step][one] = bucketOne.currentVolume
        res[step][two] = bucketTwo.currentVolume
        res[step]['explanation'] = `Fill ${one}`
      }

      if (bucketTwo.currentVolume == bucketTwo.volume) {
        bucketTwo.empty()
        step++;
        res[step] = {}
        res[step][one] = bucketOne.currentVolume
        res[step][two] = bucketTwo.currentVolume
        res[step]['explanation'] = `Dump ${two}`
      }

    }
    return res;
  }

  private validateResult(obj1: Record<string, any>, obj2: Record<string, any>) {
    const fastest = Math.min(Object.keys(obj1).length, Object.keys(obj2).length)
    const matched = [obj1, obj2].filter(obj => Object.keys(obj).length === fastest)
    if (matched.length === 1) {
      return { fastestWay: matched[0] }
    }

    else {
      return {
        way1: matched[0],
        way2: matched[1]
      }
    }
  }

}
