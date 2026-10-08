import { m } from '$lib/paraglide/messages';
import { toast } from 'svelte-sonner';

type FileSent = { actorName: string; actorGender: 'female' | 'male' | 'other'; count: number };

export const notifyFileSent = (event: FileSent) =>
	toast.info(m.file_sent_activity({ actorName: event.actorName, actorGender: event.actorGender, count: event.count }));

export const notifyInvites = (count: number, email: string) =>
	toast.success(m.invites_sent({ count, email }));
