import router from './routes/index';

const PORT: any = 4000;


router.listen(PORT, () => {
    console.log(`Express server is listening at ${PORT}`);
});