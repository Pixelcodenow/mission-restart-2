import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ticketsData from './assets/tickets.json';
import vector1 from "./assets/vector1.png";
import { Calendar, User, CheckCircle2, Clock, Ticket as TicketIcon } from 'lucide-react';

const TicketBody = () => {
    const [tickets, setTickets] = useState(ticketsData);
    const [inProgress, setInProgress] = useState([]);
    const [resolved, setResolved] = useState([]);

    
    const handleTicketClick = (ticket) => {
        if (inProgress.find(t => t.id === ticket.id)) {
            toast.error("This ticket is already in progress!", {
                style: { borderRadius: '10px', background: '#333', color: '#fff' }
            });
            return;
        }
        setInProgress([...inProgress, ticket]);
        toast.success(`Task Started: ${ticket.title}`, {
            icon: '⏳',
            duration: 3000,
        });
    };

    // টিকেট 'Resolved' করা
    const handleComplete = (ticket) => {
        setInProgress(inProgress.filter(t => t.id !== ticket.id));
        setResolved([...resolved, ticket]);
        setTickets(tickets.filter(t => t.id !== ticket.id));
        
        toast.success("Successfully Resolved!", {
            icon: '✅',
            style: {
                border: '1px solid #10b981',
                padding: '16px',
                color: '#10b981',
            },
        });
    };

    return (
        <div className="bg-[#f8fafc] min-h-screen p-4 md:p-10 font-sans">
            {/* React Hot Toast Container */}
            <Toaster position="top-center" reverseOrder={false} />

            <div className="max-w-7xl mx-auto">
                
                {/* --- Banner Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="relative group overflow-hidden bg-gradient-to-br from-[#7c4dff] to-[#4413cc] h-44 rounded-3xl flex flex-col items-center justify-center text-white shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                        <img src={vector1} alt="pattern" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                        <Clock className="mb-2 opacity-80" size={28} />
                        <h3 className="text-xl font-medium z-10 opacity-90">In-Progress</h3>
                        <p className="text-5xl font-black z-10 tracking-tighter">{inProgress.length}</p>
                    </div>

                    <div className="relative group overflow-hidden bg-gradient-to-br from-[#10b981] to-[#059669] h-44 rounded-3xl flex flex-col items-center justify-center text-white shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                        <img src={vector1} alt="pattern" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                        <CheckCircle2 className="mb-2 opacity-80" size={28} />
                        <h3 className="text-xl font-medium z-10 opacity-90">Resolved</h3>
                        <p className="text-5xl font-black z-10 tracking-tighter">{resolved.length}</p>
                    </div>
                </div>

                {/* --- Main Content --- */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    
                    {/* Left: Customer Tickets */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-white rounded-lg shadow-sm">
                                <TicketIcon className="text-[#7c4dff]" size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800">Customer Tickets</h2>
                            <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">{tickets.length}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {tickets.length > 0 ? tickets.map((ticket) => (
                                <div 
                                    key={ticket.id} 
                                    onClick={() => handleTicketClick(ticket)}
                                    className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative"
                                >
                                    <div className="flex justify-between items-start mb-5">
                                        <h4 className="text-lg font-bold text-slate-800 group-hover:text-[#7c4dff] transition-colors">{ticket.title}</h4>
                                        <div className="flex items-center gap-1.5 bg-green-50 text-green-600 px-2.5 py-1 rounded-full border border-green-100">
                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider">Open</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                                        {ticket.description}
                                    </p>
                                    <div className="flex justify-between items-center border-t border-slate-50 pt-5">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-bold text-slate-400">ID: #{ticket.id}00{ticket.id}</p>
                                            <p className={`text-[10px] font-black uppercase tracking-widest ${
                                                ticket.priority === 'Urgent' ? 'text-rose-500' : 'text-indigo-500'
                                            }`}>
                                                {ticket.priority} Priority
                                            </p>
                                        </div>
                                        <div className="text-right space-y-1">
                                            <div className="flex items-center justify-end gap-1.5 text-slate-600 font-semibold text-[11px] capitalize">
                                                <User size={13} className="text-slate-400" /> {ticket.customer}
                                            </div>
                                            <div className="flex items-center justify-end gap-1.5 text-slate-400 text-[10px]">
                                                <Calendar size={13} /> {ticket.createdAt}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="col-span-full bg-white border-2 border-dashed border-slate-200 rounded-3xl p-20 text-center">
                                    <p className="text-slate-400 font-medium">No tickets available to process.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Task Status Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-50 sticky top-24">
                            <h3 className="text-lg font-bold text-slate-800 mb-1">Task Status</h3>
                            <p className="text-[11px] text-slate-400 mb-6">Manage your active assignments</p>
                            
                            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {inProgress.map(item => (
                                    <div key={item.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#7c4dff]/30 transition-colors">
                                        <p className="text-xs font-bold text-slate-700 mb-3 leading-snug">{item.title}</p>
                                        <button 
                                            onClick={() => handleComplete(item)}
                                            className="w-full py-2.5 bg-[#7c4dff] hover:bg-[#6232f5] text-white rounded-xl text-xs font-bold transition-all active:scale-95 shadow-lg shadow-[#7c4dff]/20"
                                        >
                                            Complete Task
                                        </button>
                                    </div>
                                ))}
                                {inProgress.length === 0 && (
                                    <div className="py-10 text-center">
                                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Clock className="text-slate-300" size={20} />
                                        </div>
                                        <p className="text-xs text-slate-400 italic">Queue is empty</p>
                                    </div>
                                )}
                            </div>

                            {resolved.length > 0 && (
                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-green-500" /> Resolved Today
                                    </h3>
                                    <div className="space-y-3">
                                        {resolved.slice(-5).reverse().map(item => (
                                            <div key={item.id} className="text-[11px] text-slate-500 flex items-center gap-2 bg-green-50/50 p-2 rounded-lg">
                                                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                                                <span className="truncate">{item.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TicketBody;