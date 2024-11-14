let func = (users) => {
    document.write(`<ul>`)
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)

    }
    document.write(`</ul>`)

}
func([
    {id: 1,name:`asd`,age:20},
    {id: 1,name:`asd`,age:20},
    {id: 1,name:`asd`,age:20},
    {id: 1,name:`asd`,age:20},
    {id: 1,name:`asd`,age:20}
])