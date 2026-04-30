import type { RequestStatus, UpgradeRequest, PaginatedResponse, PastRequest } from '../types/upgradeRequest';
const ADMINS = ['Amon-Ra', 'Nefertiti', 'Ramses', 'Cleopatra', 'Thoth'];

export const PAGE_SIZE = 5;

const NATIONAL_ID_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0JSO-6zC8dDu6yq0kgw35a9eEw17XFgvRfPI2F4C9R8uAy5QZa7JyJbgET6a1iBAno8REXdYjT4GhUqKz12zq8bESUOT6ubsiDqVw-4k91E_70j2hfSm0YnLVMFIzydjsj3fLNRLqj-fk1U90ceVXydT6A456cTtlw65pnfFta795k3tWENTacHooO4JeIKafPjAYn2joLesYUqgXS3K2y8BB2dX0GVVV1IYfQEwYjFdC-8mqCyqsa1UQFEGHBznVuHDskC2ecchv';
const PDF_URL = 'https://www.orimi.com/pdf-test.pdf';

export const allMockRequests: UpgradeRequest[] = [
  {
    id: 'TRA-9842',
    userId: 'USR-2041',
    userName: 'John Doe',
    title: 'Royal Explorer Upgrade',
    description: 'Requesting upgrade to guide role for Amon-Ra Membership Tier.',
    createdAtUtc: '2023-10-24T10:00:00Z',
    status: 'pending',
    languages: ['Arabic', 'English'],
    nationalIdFront: NATIONAL_ID_IMG,
    nationalIdBack: null,
    certificates: [{ name: 'Professional_License_2023.pdf', size: '2.4 MB', uploadedAt: '2023-10-24T10:00:00Z', url: PDF_URL }],
    rejectionReason: null,
    reviewedAt: null,
    reviewedBy: null,
  },
  {
    id: 'TRA-9840',
    userId: 'USR-1158',
    userName: 'Sara Ahmed',
    title: 'Curator Verification',
    description: 'Luxor Guide Accreditation request.',
    createdAtUtc: '2023-10-22T09:00:00Z',
    status: 'approved',
    languages: ['Arabic', 'French'],
    nationalIdFront: NATIONAL_ID_IMG,
    nationalIdBack: NATIONAL_ID_IMG,
    certificates: [{ name: 'Luxor_Accreditation.pdf', size: '1.8 MB', uploadedAt: '2023-10-22T09:00:00Z', url: PDF_URL }],
    rejectionReason: null,
    reviewedAt: '2023-10-25T10:00:00Z',
    reviewedBy: 'Amon-Ra',
  },
  {
    id: 'TRA-9838',
    userId: 'USR-4521',
    userName: 'Mohamed Ali',
    title: 'Diplomatic Pass Request',
    description: 'Valley of Kings Access request.',
    createdAtUtc: '2023-10-20T08:00:00Z',
    status: 'denied',
    languages: ['Arabic', 'English', 'German'],
    nationalIdFront: NATIONAL_ID_IMG,
    nationalIdBack: null,
    certificates: [{ name: 'Valley_License.pdf', size: '3.1 MB', uploadedAt: '2023-10-20T08:00:00Z', url: PDF_URL }],
    rejectionReason: 'Documents were expired.',
    reviewedAt: '2023-10-25T10:00:00Z',
    reviewedBy: 'Amon-Ra',
  },
...Array.from({ length: 18 }, (_, i) => {
  const status = (['pending', 'approved', 'denied'] as const)[i % 3];
  const isReviewed = status !== 'pending';

  return {
    id: `TRA-${9830 - i}`,
    userId: `USR-${1000 + i}`,
    userName: `User ${i + 4}`,
    title: `Guide Upgrade Request ${i + 4}`,
    description: 'Standard guide role upgrade request.',
    createdAtUtc: new Date(2023, 9, 18 - i).toISOString(),
    status,
    languages: ['Arabic'],
    nationalIdFront: NATIONAL_ID_IMG,
    nationalIdBack: null,
    certificates: [{ name: `License_${i + 4}.pdf`, size: '1.2 MB', uploadedAt: new Date(2023, 9, 18 - i).toISOString(), url: PDF_URL }],
    rejectionReason: status === 'denied' ? 'Documents were expired.' : null,
    reviewedAt: isReviewed ? new Date(2023, 9, 17 - i).toISOString() : null,
    reviewedBy: isReviewed ? ADMINS[i % ADMINS.length] : null,
  };
}),
];

export function getMockPage(
  page: number,
  status: RequestStatus = 'pending',
  sort: 'newest' | 'oldest' = 'newest'
): PaginatedResponse<UpgradeRequest> {
  const filtered = allMockRequests.filter(r => r.status === status);

  filtered.sort((a, b) => {
    const diff = new Date(a.createdAtUtc).getTime() - new Date(b.createdAtUtc).getTime();
    return sort === 'newest' ? -diff : diff;
  });

  const start = (page - 1) * PAGE_SIZE;

  return {
    data: filtered.slice(start, start + PAGE_SIZE),
    page,
    pageSize: PAGE_SIZE,
    totalCount: filtered.length,
  };
}

export const mockStats = {
  pendingCount: allMockRequests.filter(r => r.status === 'pending').length,
};

export const mockPastRequests: PastRequest[] = [
  {
    id: 'TRA-8821',
    createdAtUtc: '2022-09-12T10:00:00Z',
    title: 'Standard Guide App',
    status: 'denied',
    rejectionReason: 'Documents were expired.',
  },
];