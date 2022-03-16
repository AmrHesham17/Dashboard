import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx bxs-dashboard',
        link: '',
    },
    {
        id: 9,
        label: 'MENUITEMS.HR.TEXT',
        icon: 'bx bxs-grid',
        subItems: [
            {
                id: 12,
                label: 'MENUITEMS.HR.LIST.PAGES',
                badge: {
                    variant: 'success',
                    text: 'Em',
                },
                parentId: 9,
                subItems: [
                    {
                        id: 13,
                        label: 'MENUITEMS.HR.LIST.SUB.INBOX',
                        link: '/hr/inbox',
                        parentId: 12
                    },
                    {
                        id: 14,
                        label: 'MENUITEMS.HR.LIST.SUB.READEMAIL',
                        link: '/apps/read/1',
                        parentId: 12
                    }
                ]
            },
            {
                id: 12,
                label: 'MENUITEMS.HR.LIST.SETTINGS',
                badge: {
                    variant: 'success',
                    text: 'Em',
                },
                parentId: 9,
                subItems: [
                    {
                        id: 13,
                        label: 'MENUITEMS.HR.LIST.SUB.INBOX',
                        link: '/hr/inbox',
                        parentId: 12
                    },
                    {
                        id: 14,
                        label: 'MENUITEMS.HR.LIST.SUB.READEMAIL',
                        link: '/apps/read/1',
                        parentId: 12
                    }
                ]
            },
            {
                id: 12,
                label: 'MENUITEMS.HR.LIST.REPORTS',
                badge: {
                    variant: 'success',
                    text: 'Em',
                },
                parentId: 9,
                subItems: [
                    {
                        id: 13,
                        label: 'MENUITEMS.HR.LIST.SUB.INBOX',
                        link: '/hr/inbox',
                        parentId: 12
                    },
                    {
                        id: 14,
                        label: 'MENUITEMS.HR.LIST.SUB.READEMAIL',
                        link: '/apps/read/1',
                        parentId: 12
                    }
                ]
            }
        ]
    },
];

