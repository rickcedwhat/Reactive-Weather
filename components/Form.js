import { Autocomplete, TextField, Stack, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const Form = ({ location, setLocation, options }) => {
  const {
    handleSubmit,
    control,
    formState: { isDirty },
    reset,
  } = useForm({
    defaultValues: { location: location.city },
  });

  const onSubmit = (data) => {
    console.log({ data, options });
    const newLocation = options.find((option) => option.city === data.location);
    if (!newLocation) {
      return;
    }
    setLocation(newLocation);
    reset({ location: newLocation.city });
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      style={{ background: "white", padding: 20 }}
    >
      <Controller
        name="location"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.city}
            value={options.find((option) => option.city === value) || null}
            onChange={(_, newValue) => {
              console.log({ options, newValue, location });
              onChange(newValue ? newValue.city : "");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={"City"}
                variant="outlined"
                style={{ width: 300 }}
              />
            )}
          />
        )}
      />
      <Button
        variant="contained"
        className="btn btn-primary"
        onClick={handleSubmit(onSubmit)}
        disabled={!isDirty}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default Form;
