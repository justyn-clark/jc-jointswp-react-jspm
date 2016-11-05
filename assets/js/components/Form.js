import React, { Component } from 'react';
import Label from './Lable';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';

const Form = (props) => <form>

                    <Input />
                    <Textarea />
                    <Label/>
                    <Select />
            </form>;

export default Form