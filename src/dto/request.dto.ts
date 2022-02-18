import { ApiProperty } from "@nestjs/swagger"

export class JugBody {
    @ApiProperty()
    x: number
    @ApiProperty()
    y: number
    @ApiProperty()
    z: number
}