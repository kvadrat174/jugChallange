import { ApiProperty } from "@nestjs/swagger"

export class JugBody {
    @ApiProperty({ example: 2 })
    x: number
    @ApiProperty({ example: 10 })
    y: number
    @ApiProperty({ example: 4 })
    z: number
}

export class JugResponse {
    @ApiProperty()
    fastestWay?: Record<string, any>

    @ApiProperty()
    way1?: Record<string, any>

    @ApiProperty()
    way2?: Record<string, any>
}