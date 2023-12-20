import React from 'react';
import './style.scss';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import dummyData from '../../_api/dummy/dummyData';
import dummyLink from '../../_api/dummy/dummyLink';

const logo = require('../../../public/static/images/dummy/logo.png');

export default function Footer(props: any) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} >
                <Grid item xs={3} >
                    <Image
                        src={logo}
                        width={100}
                        height={100}
                        alt="Logo of site"
                    />
                    <Typography variant="caption" display="block" gutterBottom>
                        Hotline: {dummyData.hotline}
                    </Typography>
                    <Box>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                            <div>
                                <Link href={dummyLink.linkedln} rel="noopener noreferrer" target="_blank">  <FontAwesomeIcon icon={faLinkedinIn} /></Link>
                            </div>
                            <div>
                                <Link href={dummyLink.facebook} rel="noopener noreferrer" target="_blank">  <FontAwesomeIcon icon={faFacebookF} /></Link>
                            </div>
                            <div>
                                <Link href={dummyLink.twitter} rel="noopener noreferrer" target="_blank">   <FontAwesomeIcon icon={faTwitter} /></Link>
                            </div>
                        </Stack>
                    </Box>
                    <Typography variant="body2" display="block" gutterBottom>
                        {dummyData.copyright}
                    </Typography>
                </Grid>
                < Grid item xs={2} >
                    <Typography sx={{ fontWeight: 'bold' }} variant="h4" display="block" gutterBottom>
                        Về chúng tôi
                    </Typography>
                    <Box>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
                            <div>
                                <Link href={dummyLink.linkedln} rel="noopener noreferrer" target="_blank">
                                    Trang chủ
                                </Link>
                            </div>
                            <div>
                                <Link href={dummyLink.facebook} rel="noopener noreferrer" target="_blank">
                                    VỀ chúng tôi
                                </Link>
                            </div>
                            <div>
                                <Link href={dummyLink.twitter} rel="noopener noreferrer" target="_blank">
                                    Liên hệ với chúng tôi
                                </Link>
                            </div>
                            <div>
                                <Link href={dummyLink.twitter} rel="noopener noreferrer" target="_blank">
                                    SDGS 17 điều
                                </Link>
                            </div>
                        </Stack>
                    </Box>
                </Grid>
                < Grid item xs={2} >
                    <Typography sx={{ fontWeight: 'bold' }} variant="h4" display="block" gutterBottom>
                        Khách hàng
                    </Typography>
                    <Box>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
                            <div>
                                <Link href={dummyLink.linkedln} rel="noopener noreferrer" target="_blank">
                                    Tin tức
                                </Link>
                            </div>
                            <div>
                                <Link href={dummyLink.facebook} rel="noopener noreferrer" target="_blank">
                                    FAQ
                                </Link>
                            </div>
                            <div>
                                <Link href={dummyLink.twitter} rel="noopener noreferrer" target="_blank">
                                    Carrer
                                </Link>
                            </div>
                        </Stack>
                    </Box>
                </Grid>
                < Grid item xs={2} >
                    <Typography sx={{ fontWeight: 'bold' }} variant="h4" display="block" gutterBottom>
                        Điều khoản
                    </Typography>
                    <Box>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
                            <div>
                                <Link href={dummyLink.linkedln} rel="noopener noreferrer" target="_blank">
                                    Dịch vụ
                                </Link>
                            </div>
                            <div>
                                <Link href={dummyLink.facebook} rel="noopener noreferrer" target="_blank">
                                    Bảo mật
                                </Link>
                            </div>
                        </Stack>
                    </Box>
                </Grid>
                < Grid item xs={3} >
                    <Typography sx={{ fontWeight: 'bold' }} variant="h4" display="block" gutterBottom>
                        Luôn cập nhật tin tức mới nhất
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="caption" display="block" gutterBottom>
                        Hãy là người đầu tiên biết về căn hộ mới nhất
                        của chúng tôi
                    </Typography>

                    <FormGroup>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            defaultValue=""
                            variant="filled"
                            size="small"
                        />
                        <Button variant="contained">Đăng ký</Button>
                    </FormGroup>

                </Grid>
            </Grid>
        </Box>
    );
}
