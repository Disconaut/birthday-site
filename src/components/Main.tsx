import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import images from '../resources/imagesPaths.json';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { Box, Container, Stack, Typography } from '@mui/material';

import '../style/main.scss';

const randomizeImages = (images: string[], count: number) => {
    const repeatedImages = Array(count).fill(images).flat();
    return repeatedImages.sort(() => Math.random() - 0.5);
};

const Main: React.FC = () => {
    return (
        <ParallaxBanner className='bd-main'>
            <ParallaxBannerLayer speed={30}>
                <ImageList variant='masonry' cols={10}>
                    {randomizeImages(images, 110).map((image) => (
                        <ImageListItem key={image}>
                            <img
                                src={`${image}`}
                                srcSet={`${image}`}
                                alt='Симпампулик'
                                loading="lazy"
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat metus at cursus eleifend. Morbi lorem felis, volutpat non augue in, ultrices tempus libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec quis mauris at neque pharetra rhoncus. Sed consequat vel ligula tristique faucibus. In lectus sapien, ullamcorper et purus et, aliquet faucibus massa. Donec sem ante, euismod vel eros in, lacinia semper eros. Quisque ligula nisi, iaculis nec aliquet in, rutrum sed mauris. Nullam sit amet leo magna.
                            </Typography>
                            <Typography variant='body1' textAlign='justify'>
                                Nullam eu lorem dui. Etiam sed odio in arcu tincidunt aliquam ac eget ipsum. Mauris pharetra ut lorem sit amet feugiat. Nam pharetra risus sed convallis consequat. Proin imperdiet commodo suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lobortis vitae magna quis molestie. Donec dui justo, dictum non hendrerit non, pulvinar in erat. Duis maximus vehicula nunc, id sodales tortor lacinia at. Pellentesque fermentum vehicula risus, vel dapibus dolor sollicitudin id. Mauris dictum aliquet nibh nec aliquam. Pellentesque vestibulum ante at tortor euismod, eget auctor turpis porta. Integer posuere non libero a ultrices. Aenean auctor vehicula lectus, ac imperdiet enim. Quisque maximus ligula nec nisl facilisis semper. Nam vehicula ultrices mattis.
                            </Typography>
                            <Typography variant='body1' textAlign='justify'>
                                Sed et magna eget mauris luctus volutpat. Fusce consectetur, libero eget tempus gravida, ligula orci scelerisque neque, in dapibus sapien nunc a turpis. Nulla at eleifend justo. Duis ac nisi quis tortor scelerisque rhoncus a eu nulla. In ullamcorper sapien eget sapien consectetur, et varius turpis molestie. Vivamus dui elit, faucibus sit amet volutpat ac, efficitur quis erat. Nullam feugiat aliquam dolor sed elementum. Aliquam id leo nisi. Cras id justo elit. Nunc tincidunt luctus tempus. Aliquam vulputate finibus erat et laoreet.
                            </Typography>
                        </Stack>
                    </Box>
                </Container>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    )
};

export default Main;