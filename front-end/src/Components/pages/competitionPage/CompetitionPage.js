import React from 'react';
import Footer from '../../Footer/Footer';
import Block from './Block';
import Functional from './Functional';

export default function CompetitionPage() {
    return (
        <>
            <Functional />
            <Block />
            <div className='grey'>
                <Footer />
            </div>
        </>
    )
}
