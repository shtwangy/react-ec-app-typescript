import React, {FC} from 'react';
import Button from '@material-ui/core/Button'
import {makeStyles} from "@material-ui/core";

interface Props {
    label: string
    onClick: () => void
}

const useStyles = makeStyles({
    "button": {
        backgroundColor: "#000",
        color: '#fff',
        fontSize: 16,
        height: 48,
        marginBottom: 16,
        width: 256
    }
});

const PrimaryButton: FC<Props> = (props: Props) => {
    const classes = useStyles()
    const {label, onClick} = props
    return (
        <Button className={classes.button} variant='contained' onClick={() => onClick()}>
            {label}
        </Button>
    );
};

export default PrimaryButton;
