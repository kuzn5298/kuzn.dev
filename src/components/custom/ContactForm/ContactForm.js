import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '@components/core';
import { ContactFormContainer } from './ContactForm.styled';

const EMAIL_REGEXP =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ContactForm = ({ onSubmit }) => {
    const [disabled, setDisabled] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onValid = async (data) => {
        try {
            setDisabled(true);
            await onSubmit?.(data);
            reset();
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        } finally {
            setDisabled(false);
        }
    };

    return (
        <ContactFormContainer>
            <form onSubmit={handleSubmit(onValid)} noValidate className="form">
                <Input
                    type="text"
                    name="name"
                    disabled={disabled}
                    {...register('name', {
                        required: {
                            value: true,
                            message: 'Please enter your name',
                        },
                        maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less',
                        },
                    })}
                    placeholder="Name"
                    error={!!errors.name}
                    errorMessage={errors.name?.message}
                />
                <Input
                    type="email"
                    name="email"
                    disabled={disabled}
                    {...register('email', {
                        required: {
                            value: true,
                            message: 'Please enter your email',
                        },
                        pattern: {
                            value: EMAIL_REGEXP,
                            message: 'Please enter a valid email',
                        },
                    })}
                    placeholder="Email"
                    error={!!errors.email}
                    errorMessage={errors.email?.message}
                />
                <Textarea
                    rows={6}
                    name="message"
                    disabled={disabled}
                    {...register('message', {
                        required: {
                            value: true,
                            message: 'Please enter your message',
                        },
                    })}
                    placeholder="Message"
                    error={!!errors.message}
                    errorMessage={errors.message?.message}
                />
                <div>
                    <Button type="submit" border size="large" disabled={disabled}>
                        Send
                    </Button>
                </div>
            </form>
        </ContactFormContainer>
    );
};

export default ContactForm;
