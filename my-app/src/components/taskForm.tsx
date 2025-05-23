import { Button } from './button';
import { Input } from './input';
import { TextArea } from './textarea';
import { SelectDropdown } from './selectStatus';
import { ErrorText, FormContainer } from './styles';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { TaskSchema, TTaskFormValue } from '../schemas/task';
import { addTask } from '../redux/task/slice';
import { useAppDispatch } from '../redux/hooks/useAppDispatch';

const TaskForm = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TTaskFormValue>({
    resolver: zodResolver(TaskSchema),
  });

  const submit = useCallback(
    (data: TTaskFormValue) => {
      dispatch(
        addTask({
          task: data.task,
          description: data.description,
          status: data.status,
        })
      );
      reset();
    },
    [dispatch, reset]
  );

  return (
    <FormContainer>
      <Controller
        control={control}
        name="task"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input
              placeholder="Título da Tarefa"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.task && <ErrorText>{errors.task.message}</ErrorText>}
          </>
        )}
      />

      <Controller
        control={control}
        name="status"
        render={({ field: { onChange, value } }) => (
          <>
            <SelectDropdown value={value} onChange={onChange} />
            {errors.status && <ErrorText>{errors.status.message}</ErrorText>}
          </>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextArea
              placeholder="Descrição"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.description && <ErrorText>{errors.description.message}</ErrorText>}
          </>
        )}
      />

      <Button title="Adicionar tarefa" onPress={handleSubmit(submit)} />
    </FormContainer>
  );
};

export default TaskForm;
