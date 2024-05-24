

// callback hell...


const get_data = (id, get_next_data) => 
{
    setTimeout(() => 
    {
        console.log('Data', id)
        if (get_next_data) 
        {
            get_next_data();
        }
    }, 2000)
}


get_data(1, () => {
    get_data(2, () => {
        get_data(3, () => {
            get_data(4)
        });
    });
});