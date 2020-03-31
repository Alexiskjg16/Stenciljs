
export const numberValue = (num: number) => {
    return (resolve => {
            num = Math.ceil(Math.random() * 20)
                console.log('D20:' + num)
                resolve(num);
    })
}

