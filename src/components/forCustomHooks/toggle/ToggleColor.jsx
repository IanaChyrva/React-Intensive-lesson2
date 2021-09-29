import useToggle from '../../../custom-hooks/useToggle';
import './styles.css';

const ToggleColor = () => {
  const [isVisible, setVisible] = useToggle(true);

  return (
    <div>
      <div>Toggle Color:</div>

      <button onClick={setVisible}>Click</button>
      {isVisible && <div className='block' />}
    </div>
  );
};

export default ToggleColor;
