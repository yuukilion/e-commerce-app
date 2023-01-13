import { Item } from "./Item";

export const Category = () => {
    return (
        <div style={{overflowX: 'scroll', display: 'flex'}} >
            <Item/>
            <Item/>
            <Item/>
        </div>
    );
}