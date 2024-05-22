import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SectionContainer } from '@components/app';
import { ContactForm } from '@components/custom';
import { Button } from '@components/core';
import { EMAIL_LINK } from '@constants';
import { goHome } from '@utils';
import styled from 'styled-components';

const SentSectionContainer = styled(SectionContainer)`
    gap: 1.5rem;

    p {
        margin: 0;
        text-align: center;
        display: flex;
        flex-direction: column;

        ${({ theme }) => theme.breakpoints.down('md')} {
            display: block;
        }
    }
`;

const ContactPage = () => {
    const [sent, setSent] = useState(false);

    const onSubmit = async (data) => {
        const { name, email, message } = data;

        const templateParams = {
            name,
            email,
            message,
        };

        await emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_PUBLIC_KEY
        );

        setSent(true);
    };

    if (sent) {
        return (
            <SentSectionContainer alignCenter mobileAlignCenter justifyCenter title="Thank you!">
                <p>
                    <span>
                        Thank you for reaching out! I&apos;ll try to respond within 3 business days!
                    </span>{' '}
                    <span>
                        You can also connect with me through the social media links provided on this
                        website
                    </span>
                </p>
                <Button size="large" border onClick={goHome}>
                    Home
                </Button>
            </SentSectionContainer>
        );
    }

    return (
        <SectionContainer alignCenter title="Get In Touch">
            <p>
                If you&apos;d like to get in touch with me, feel free to use the contact form
                provided below or send me a direct message at{' '}
                <span>
                    <a href={EMAIL_LINK}>{EMAIL_LINK.split(':')?.[1]}</a>
                </span>
                . You can also connect with me through the social media links provided on this
                website. Your questions, suggestions, and feedback are always welcome. I look
                forward to receiving your messages.
            </p>
            <ContactForm onSubmit={onSubmit} />
        </SectionContainer>
    );
};

ContactPage.settings = {
    title: 'Contact',
    backgroundTitle: 'Contact',
};

export default ContactPage;
