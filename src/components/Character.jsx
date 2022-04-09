import { Card , makeStyles, Tooltip, Typography} from '@material-ui/core';

const useStyle = makeStyles({
    img:{
        height: 300 ,
        width: '100%',
        objectFit:'cover'
    }
})

const Character = ({ item }) => {
    console.log(item);
    const classes = useStyle();
    return (
        <Card>
            <Tooltip title={
                <>
                    <Typography>Id: {item.char_id}</Typography>
                    <Typography>Name: {item.name}</Typography>
                    <Typography>Birthday:{item.birthday}</Typography>
                    <Typography>Occupation:{item.occupation}</Typography>
                    <Typography>Img:{item.img}</Typography>
                    <Typography>Status:{item.status}</Typography>
                    <Typography>Nickname:{item.nickname}</Typography>
                    <Typography>Portrayed:{item.portrayed}</Typography>
                    <Typography>Category:{item.category}</Typography>
                </>
                }

                arrow placement="top">
                <img src={item.img} className={classes.img} alt = "character" /> 
            </Tooltip>
        </Card>
    )
}

export default Character;