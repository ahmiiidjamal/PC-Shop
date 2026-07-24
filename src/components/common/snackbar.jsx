import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function AutohideSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}><AddShoppingCartIcon/></Button>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message="Added successfully ✅."
      />
    </div>
  );
}
