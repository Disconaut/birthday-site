import React, { useRef } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import imagePaths from '../resources/imagesPaths.json';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { Box, Container, Stack, Typography } from '@mui/material';

import '../style/main.scss';

type TProps = {
    isPortrait?: boolean;
}

const imagesCountLandscape = 60;
const imagesCountPortrait = 170;

const randomizeImages = (images: string[], count: number) => {
    const repeatCount = Math.ceil(count / images.length);
    const repeatedImages = Array(repeatCount).fill(images).flat();
    const randomizedImages = repeatedImages.sort(() => Math.random() - 0.5);
    return randomizedImages.slice(0, count);
};

const Main: React.FC<TProps> = ({ isPortrait }) => {
    const images = useRef<string[]>(randomizeImages(imagePaths, isPortrait ? imagesCountPortrait : imagesCountLandscape));

    return (
        <ParallaxBanner className='bd-main'>
            <ParallaxBannerLayer speed={30}>
                <ImageList variant='masonry' cols={5}>
                    {images.current.map((image) => (
                        <ImageListItem key={image}>
                            <img
                                alt='Симпампулик'
                                src={image}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={0}>
                <Container className='greeting'>
                    <Box className='greeting-paper'>
                        <Stack className='greeting-stack' justifyContent='center' spacing={2}>
                            <Typography variant='h3' textAlign='center'>Это твой день!</Typography>
                            <Typography variant='body1' textAlign='justify'>
                                Я тут посидел, подумал: кто же мог знать, что в этот день 18 лет назад на этой Земле родиться такая прекрасная девушка? И теперь каждый год в этот день состоится невероятны праздник, а именно ТВОЙ День рождения. Поэтому я поздравляю тебя Сима с твоим 18-ти летием. Это важный для тебя день, потому что это твой день, день девушки которая вскружила мне голову.
                            </Typography>
                            <Typography variant='body1' textAlign='justify'>
                                Ты просто невероятная девушка, ты объединяешь в себе множество качеств, от простых до необычных. В тебе есть сильная женщина, которая уверенная в себе, независимая, самостоятельная, которая может постоять за себя, принять правильные решения. Также рядом с ней стоит та милая и добрая девушка, которая любит, заботиться, которая бывает неуверенна, которая хочет внимания и любви, которой нужна сильная рука и которую очень легко ранить. Также где то там прячется еще одна девушка, которая веселая и любит немного пошалить, умеет развеселить, придумывает что то необычное и любит поиграть. И это только малая часть того, что делает тебя настолько прекрасной и удивительной девушкой!
                            </Typography>
                            <Typography variant='body1' textAlign='justify'>
                                Я благодарю Бога за то что он позволил нам встретить друг друга, ведь сейчас ты самая ценная для меня в жизни. Ты повлияла на мою жизнь, превратила ее из сплошной рутины в что то интересное и прекрасное. Ты также повлияла и на меня, благодаря тебе я становлюсь лучше. И да, тут не обходиться без трудностей, ссор, обид, но стоит мне лишь взглянуть в твои глаза, увидеть улыбку и это все забывается. Ты знаешь, что я не подарок, знаешь какой я бываю противный во время наших ссор, и мне искренне жаль за те моменты, когда я причинял тебе боль и заставлял плакать. И я не хочу чтоб у тебя была хотя б даже малейшая обида на меня. Ты мне стала очень родной, и я тебе доверяю больше чем кому либо. Ты та которой принадлежит мое сердце.
                            </Typography>
                            <Typography variant='body1' textAlign='justify'>
                                И хочу отметить что мне очень нравиться твоя улыбка и смех, я люблю их и хочу чтоб в твоей жизни было как можно больше моментов, которые заставили б тебя смеяться или улыбаться, и чтоб даже в трудные моменты улыбка не сходила с твоего лица и желаю. Также желаю чтоб плакала ты только от счастья, когда я подарю мерседес) Я желаю, чтоб у тебя было все замечательно во всех сферах твоей жизни, чтоб ты хорошо отучилась, чтоб нашла то, чем тебе нравиться и хочется заниматься и чтоб имела возможность работать на хорошей работе в последствии, если, как твой папа говорит, что то пойдет не так. Желаю, чтоб у тебя были хорошие и искренние люди в жизни, с которыми ты сможешь процветать, на которых сможешь положиться, которые смогут помочь. И также желаю тебе становиться сильнее, чтоб даже в самые трудные моменты ты находила в себе силы и справлялась со всеми трудностями легко и чтоб на тебя не влияло мнение людей, которые лишь временно находиться в твоей жизни.
                            </Typography>
                            <Typography variant='body1' textAlign='justify'>
                                Мне очень жаль, что сейчас все так происходит. Ведь я так хочу снова тебя почувствовать, обнять тебя, поцеловать, посмотреть в глаза, почувствовать твое тепло, дыхание, биение твоего сердца. И я могу бесконечно говорить сейчас о своих чувствах, желаниях, но не всегда слова могут передать весь тот спектр эмоций и чувств, и сколько я б не говорил, не кидал смайликов, стикеров и еще всякого, это никогда не опишет всю мою любовь к тебе, которая с каждым днем горит все сильне и сильнее (ведь в огонь моей любви бросает топливо та, чей сейчас день).
                            </Typography>
                            <Typography variant='body1' textAlign='justify'>
                                Еще раз поздравляю тебя с твоим днем, любимая и прекрасная Сима❤️
                            </Typography>
                        </Stack>
                    </Box>
                </Container>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    )
};

export default Main;