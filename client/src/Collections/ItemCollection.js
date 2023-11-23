import {makeAutoObservable} from "mobx";

export default class ItemCollection {
    constructor() {
        this._item=[
            {id:1, title:'настя' ,tags:'11111111111111111111',collection_id:1,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVsOXqI8xpMSY0qYmpYaHVvPyJI43XzlHWA&usqp=CAU'},
            {id:2, title:'родион' ,tags:'2',collection_id:1,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVsOXqI8xpMSY0qYmpYaHVvPyJI43XzlHWA&usqp=CAU'},
            {id:3, title:'3' ,tags:'3',collection_id:1,image_url:'data:image/png;base64,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'},
            {id:4, title:'4' ,tags:'4',collection_id:1,image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:5, title:'5' ,tags:'5',collection_id:1,image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:6, title:'6' ,tags:'6',collection_id:1,image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:7, title:'7' ,tags:'7',collection_id:1,image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:8, title:'1' ,tags:'1',collection_id:2,image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:9, title:'2' ,tags:'2',collection_id:2,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVsOXqI8xpMSY0qYmpYaHVvPyJI43XzlHWA&usqp=CAU'},
            {id:10, title:'3' ,tags:'3',collection_id:2,image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:11, title:'4' ,tags:'4',collection_id:2,image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:12, title:'5' ,tags:'5',collection_id:2,image_url:'https://brilliant24.ru/files/cat/template_01.png'},
            {id:13, title:'6' ,tags:'6',collection_id:2,image_url:'https://brilliant24.ru/files/cat/template_01.png'}

        ]
        makeAutoObservable(this)
    }

    setItem(item){
        this._item= item
    }
    setSelectedItem(item){
        this._selectedItem=item
    }
    get item(){
        return this._item
    }
    get selectedItem(){
        return this._selectedItem
    }
}