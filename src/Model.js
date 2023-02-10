const Model = () => {
  const [model, setModel] = useState();
  const { scene, camera } = useThree();

  useEffect(() => {
    fetch('http://localhost:3000/model')
      .then(res => res.json())
      .then(setModel)
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {model ? <primitive object={model.scene} /> : null}
      <ambientLight />
    </>
  );
};
