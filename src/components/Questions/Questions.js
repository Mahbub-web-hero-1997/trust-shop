import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <div className='faq_Container'>
                <div className='question_One'>
                    <h3>রিয়েক্ট কিভাবে কাজ করে?</h3>
                    <p>React একটা ব্রাউজারের ডমের মতো করে আরেকটা ডম তৈরী করে যেটাকে ভার্চুয়াল ডম বলা হয়। এই Dom আসল dom এর মতোই। কিন্তু আসলে এটি একটি Javascript object. React এর এই ভার্চুয়াল Dom এর জন্য Javascript ব্যবহার করে সহজেই কম সময়ের মধ্যে আসল Dom এর যেকোন জিনিস পরিবর্তন করা সম্ভব হয়। এতে সহজেই দ্রুত কাজ হয়ে যায় আর অতিরিক্ত, অপ্রয়োজনীয় কোনো কাজও করতে হয় না ব্রাউজারের। আর এভাবেই, এই টেকনিক ইউজ করেই রিঅ্যাক্ট এতো ফাস্ট রেন্ডার করতে পারে।
                        React একমুখী ভাবে Data সঞ্চালন করতে পারে. ফেরেন্ড থেকে চাইল্ড এর মধ্যে Data পাঠায়, কিন্তু চাইল্ড থেকে ফেরেন্ডে Data পাঠাতে পারে না। </p>
                </div>
                <div className='question_Two'>
                    <h3>Props এবং State এর মধ্যে পার্থক্য কি ?</h3>
                    <p><b>Props :</b></p>
                    <p> Props সুধু পড়তে পারা যায়। এটির মাধ্যমে আমরা এক Component থেকে অন্য Component এ Data পাঠাতে পারি। এটি অপরিবর্তনীয়। Props এর মধ্যমে component এর উপাদনগুলোকে পুনরায় ব্যবহার যোগ্য করতে পারি।</p>
                    <p><b>State :</b></p>
                    <p>State হচ্ছে পরিবর্তনশীল। অর্থাৎ এটি web-page এর এমন একটি অবস্থা যা ব্যবহারকারী চাইলে পরিবর্তন করতে পারে। State চাইল্ড উপাদান দ্বারা এক্সেস করা যায় না। State কোন component কে পুনরায় ব্যাবহার যোগ্য করতে পারে না।</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;