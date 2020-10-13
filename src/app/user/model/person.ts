export interface IPersonData {
    results: Array<IPerson>;

}

export interface IPerson {
    name:IPersonName;
    gender:string;
    profession:string;
    knowfor:string;
}


export interface IPersonName {
    first:string;
    last: string;
}
