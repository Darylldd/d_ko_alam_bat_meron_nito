let items = [
    {id:1, itemName: 'Saging'},
    {id:2, itemName: 'Banana'},
    {id:3, itemName: 'Plantains'}
];


//getall
const getItems = (req,res) =>{
    res.json(items);
};

//getid
const getItemId =(req, res) =>{
    const item = items.find(u => u.id == req.params.id);
    if(items){
        res.json(item);
    }
    else{
        res.status(404).json({message: 'Item not found'});
    }
};

//postitem
const createItem = (req,res) =>{
    const newItems ={
        id: items.length + 1,
        itemName:req.body.itemName
    };
    items.push(newItems);
    res.status(201).json(newItems);
};

//putitems
const updateItem = (req,res) =>{
    const item = items.find(u => u.id == req.params.id);
    if(item){
        item.itemName = req.body.itemName;
        res.json(item);
    }
    else{
        res.status(404).json({message:'Item not found'})
    }
};

//patchitems
const patchItems = (req,res) => {
    const item =items.find(u => u.id == req.params.id);
    if(item){
        if(req.body.itemName){
            item.itemName = req.body.itemName;
        }
        res.json(item);
    }
    else{
        res.status(404).json({message:'Item not found'});
    }
};

//deleteitem
const deleteItem =(res,req)=>{
     items =items.filter(u => u.id != req.params.id);
     res.status(204).send();
};

module.exports = {
getItems,
getItemId,
createItem,
updateItem,
patchItems,
deleteItem

};