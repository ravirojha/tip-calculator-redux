import { Stack } from '@twilio-paste/stack';
import { MenuItemConatiner } from '../containers/MenuItemContainer';

export const MenuItems = ({ items }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        <MenuItemConatiner {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};
