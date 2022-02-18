export class Bucket {

    name: string;
    volume: number;
    currentVolume: number;

    constructor(volume: number, name: string) {
        this.name = name
        this.currentVolume = 0
        this.volume = volume
    }

    fill() {
        this.currentVolume = this.volume
    }

    empty() {
        this.currentVolume = 0
    }

    transfer(bucket: Bucket) {
        const newAmount = bucket.currentVolume + this.currentVolume
        const transferVolume = bucket.volume - bucket.currentVolume
        bucket.currentVolume = newAmount > bucket.volume ? bucket.volume : newAmount
        this.currentVolume = transferVolume > this.volume ? 0 : (this.currentVolume - transferVolume)

    }

}