
const lowerCaseWords = (mixedArray) => {

  return new Promise((resolve, reject) => {
    
    if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
      
      const filteredArrayHavingOnlyStr = mixedArray.filter((eachElOfArr) => typeof eachElOfArr === "string")

      const mappedArrayOfLowerCaseStrings = filteredArrayHavingOnlyStr.map((eachItemOfFilterArr) =>

        eachItemOfFilterArr.toLowerCase()
      )

      resolve(mappedArrayOfLowerCaseStrings)

    } else {

        reject("Invalid Array")
    }
  })
}

const mixedArray = ["AMIR_HOSSEIN_HAMEDANIZAD", 33, true, 333, false, "CAT_LOVER"]

lowerCaseWords(mixedArray).then((value) => console.log(value))

lowerCaseWords(mixedArray).catch((error) => console.log(error))