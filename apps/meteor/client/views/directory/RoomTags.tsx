import type { IRoom, Serialized } from '@rocket.chat/core-typings';
import { Box, Margins, Tag } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';
import React from 'react';

type RoomTagsProps = { room: Serialized<IRoom> };

const RoomTags = ({ room }: RoomTagsProps): ReactElement => {
	const t = useTranslation();

	return (
		<Box mi={4} alignItems='center' display='flex' withTruncatedText>
			<Margins inline={2}>
				{room.default && <Tag variant='secondary'>{t('default')}</Tag>}
				{room.featured && <Tag variant='secondary'>{t('featured')}</Tag>}
			</Margins>
		</Box>
	);
};

export default RoomTags;
