export function calculateVolumeOfaPrism(
    width:number,
    length:number,
    height:number) { 

        if (length < 0){
            throw new Error("Length should be positive");
        }

        if (width < 0){
            throw new Error("Width should be positive");
        }
  
        if (height < 0){
            throw new Error("Height should be positive");
        }

        if (length == 0){
            throw new Error("Length should not be zero");
        }

        if (width == 0){
            throw new Error("Width should not be zero");
        }

        if (height == 0){
            throw new Error("Height should not be zero");
        }

    return width * length * height
}