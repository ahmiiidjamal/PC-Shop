import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

export default function Buttons({text , func}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" style={{
        borderRadius:"50px"
      }}
      onClick={func}>{text}</Button>
    </Stack>
  );
}