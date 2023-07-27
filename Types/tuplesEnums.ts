// Super rigids arrays, not very usually
// just 3 numbers
const color: [number, number, number] = [255, 255, 255];

// tuples types
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'ok']
goodRes[0] = 400;
// goodRes[0] = "400"; error
goodRes.push(123) //i can do it
goodRes.pop(); //ok
goodRes.pop(); //ok

const responses : HTTPResponse[] = [[404, "not found"], [200, "found"]]
