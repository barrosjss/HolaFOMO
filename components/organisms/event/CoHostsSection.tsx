'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export interface CoHost {
  id: string;
  name: string;
  avatar: string;
  title: string;
  profileUrl: string;
}

export interface CoHostsSectionProps {
  coHosts: CoHost[];
}

export function CoHostsSection({ coHosts }: CoHostsSectionProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <TooltipProvider>
          {coHosts.slice(0, 3).map((coHost) => (
            <Tooltip key={coHost.id}>
              <TooltipTrigger asChild>
                <Link href={coHost.profileUrl}>
                  <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg hover:from-[#F95F2E]/5 hover:to-purple-50 hover:border-[#F95F2E]/20 transition-all duration-300 cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-gray-50 overflow-hidden ring-2 ring-gray-200/50 group-hover:ring-[#F95F2E]/30 flex-shrink-0 shadow-md transition-all duration-300">
                      <Image
                        src={coHost.avatar || "/placeholder.svg"}
                        alt={coHost.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-bold text-gray-900 truncate group-hover:text-[#F95F2E] transition-colors duration-300">
                        {coHost.name}
                      </p>
                      <p className="text-sm text-gray-600 truncate font-light">{coHost.title}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-[#F95F2E]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#F95F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-white border border-gray-200 shadow-xl rounded-xl p-4">
                <div className="text-center">
                  <p className="font-bold text-gray-900 mb-1">{coHost.name}</p>
                  <p className="text-sm text-gray-600">{coHost.title}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>

      {/* Show more button if there are many co-hosts */}
      {coHosts.length > 3 && (
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full border-2 border-gray-200 text-gray-600 hover:border-[#F95F2E] hover:bg-[#F95F2E] hover:text-white transition-all duration-300 rounded-xl py-3 font-medium"
          >
            Ver todos los co-anfitriones ({coHosts.length})
          </Button>
        </div>
      )}
    </div>
  );
}

export default CoHostsSection;
