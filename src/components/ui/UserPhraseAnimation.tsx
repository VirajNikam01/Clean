import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Hey,', 'Cool,', 'Yo,', 'Smart,', 'Smart,'];

const UserNameText = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000,
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className=' min-w-20 flex justify-end text-purple-800'>
      <h1 className='font-bold text-lg text-right w-fit '>
        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </h1>
    </div>
  );
}

export default UserNameText
