import app from './app';

const port = 3002;

app.listen(port, () => {
  console.log(`Escutando na url, http://192.168.3.19:${port}`);
});
