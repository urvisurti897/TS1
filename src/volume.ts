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


    return width * length * height
}