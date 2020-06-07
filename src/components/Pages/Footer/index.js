import React from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';

export default function Footer (props) {

    const [direction, setDirection] = React.useState('left');
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleDirectionChange = (event) => {
        setDirection(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
        { icon: <FavoriteIcon />, name: 'Like' },
    ];

    const useStyles = makeStyles((theme) => ({
        root: {
          transform: 'translateZ(0px)',
          flexGrow: 1,
        },
        exampleWrapper: {
          position: 'relative',
          marginTop: theme.spacing(3),
          height: 380,
        },
        speedDial: {
          position: 'absolute',
          '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(2),
            right: theme.spacing(2),
          },
          '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            top: theme.spacing(2),
            left: theme.spacing(2),
          },
        },
    }));

    const classes = useStyles();
    
    return (
        <div className="footer-container">
            <div className="footer-cover-flex">
                <div className="footer-cover-item">
                    <div className="footer-bg-cover-flex">
                        <div className="footer-bg-cover-item"></div>
                    </div>
                </div>
            </div>
            <div className={`${classes.exampleWrapper} speed-dial-wrapper-cover`}>
                <SpeedDial
                ariaLabel="SpeedDial example"
                className={`${classes.speedDial} speed-dial-cover`}
                hidden={hidden}
                icon={<SpeedDialIcon className="speed-dial-icon-cover" />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction={direction}
                >
                {actions.map((action) => (
                    <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={handleClose}
                    />
                ))}
                </SpeedDial>
            </div>
        </div>
    )
}