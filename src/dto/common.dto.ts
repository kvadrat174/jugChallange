import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsNotEmpty, IsPositive, IsInt } from "class-validator"

export class JugBody {
    @ApiProperty({ example: 2 })
    @IsNotEmpty({ message: 'property x should not be empty' })
    @IsInt()
    @IsPositive()
    // @IsNumber()
    x: number

    @ApiProperty({ example: 10 })
    @IsNotEmpty({ message: 'property y should not be empty' })
    @IsInt()
    @IsPositive()
    y: number

    @ApiProperty({ example: 4 })
    @IsNotEmpty({ message: 'property z should not be empty' })
    @IsInt()
    @IsPositive()
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