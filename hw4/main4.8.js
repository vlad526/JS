
function func (Array) {
    document.write(`<ul>`)
    for (const item of Array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)

}
func([1,2,3,true,false,'asd'])