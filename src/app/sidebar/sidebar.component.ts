import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter()
  searchText: any;
  conversations = [
    {
      name: "David", time: "8:21", latestMessage: "Good morning", latestMessageRead: false,
      messages: [
        { id: 1, body: "how far", time: "8:21", me: false },
        { id: 2, body: "i dey", time: "8:21", me: true },
        { id: 3, body: "watin sub", time: "8:21", me: false },
        { id: 1, body: "every every", time: "8:21", me: true },
      ]
    },
    {
      name: "John", time: "8:21", latestMessage: "Good morning", latestMessageRead: true,
      messages: [
        { id: 1, body: "hello", time: "8:21", me: false },
        { id: 2, body: "hi", time: "8:21", me: true },
        { id: 3, body: "where are you", time: "8:21", me: false },
        { id: 1, body: "everywhere", time: "8:21", me: true },
      ]
    },
    {
      name: "Albert", time: "8:21", latestMessage: "Good morning", latestMessageRead: false,
      messages: [
        { id: 1, body: "hi", time: "8:21", me: false },
        { id: 2, body: "hier", time: "8:21", me: true },
        { id: 3, body: "what is that", time: "8:21", me: false },
        { id: 1, body: "watermelon", time: "8:21", me: true },
      ]
    },
    {
      name: "Nonso", time: "8:21", latestMessage: "Good morning", latestMessageRead: true,
      messages: [
        { id: 1, body: "my guy", time: "8:21", me: false },
        { id: 2, body: "OG", time: "8:21", me: true },
        { id: 3, body: "watin sub", time: "8:21", me: false },
        { id: 1, body: "every every", time: "8:21", me: true },
      ]
    },
    {
      name: "Ifeanyi", time: "8:21", latestMessage: "Good morning", latestMessageRead: true,
      messages: [
        { id: 1, body: "big man", time: "8:21", me: false },
        { id: 2, body: "how far u na", time: "8:21", me: true },
        { id: 3, body: "watin sub", time: "8:21", me: false },
        { id: 1, body: "mtn 550", time: "8:21", me: true },
      ]
    },
    {
      name: "Joy", time: "8:21", latestMessage: "Good morning", latestMessageRead: false,
      messages: [
        { id: 1, body: "how far", time: "8:21", me: false },
        { id: 2, body: "i dey", time: "8:21", me: true },
        { id: 3, body: "watin sub", time: "8:21", me: false },
        { id: 1, body: "every every", time: "8:21", me: true },
      ]
    },
    {
      name: "Eunice", time: "8:21", latestMessage: "hi", latestMessageRead: true,
      messages: [
        { id: 1, body: "how far", time: "8:21", me: false },
        { id: 2, body: "i dey", time: "8:21", me: true },
        { id: 3, body: "watin sub", time: "8:21", me: false },
        { id: 1, body: "every every", time: "8:21", me: true },
      ]
    },
    {
      name: "Vincent", time: "8:21", latestMessage: "Good morning", latestMessageRead: false,
      messages: [
        { id: 1, body: "how far", time: "8:21", me: false },
        { id: 2, body: "i dey", time: "8:21", me: true },
        { id: 3, body: "watin sub", time: "8:21", me: false },
        { id: 1, body: "every every", time: "8:21", me: true },
      ]
    },
    {
      name: "Troy", time: "8:21", latestMessage: "Good morning", latestMessageRead: false,
      messages: [
        { id: 1, body: "how far", time: "8:21", me: false },
        { id: 2, body: "i dey", time: "8:21", me: true },
        { id: 3, body: "watin sub", time: "8:21", me: false },
        { id: 1, body: "every every", time: "8:21", me: true },
      ]
    },
    {
      name: "Sarah", time: "8:21", latestMessage: "Good morning", latestMessageRead: true,
      messages: [
        { id: 1, body: "how far", time: "8:21", me: false },
        { id: 2, body: "i dey", time: "8:21", me: true },
        { id: 3, body: "watin sub", time: "8:21", me: false },
        { id: 1, body: "every every", time: "8:21", me: true },
      ]
    },
    {
      name: "Andrew", time: "8:21", latestMessage: "Good morning", latestMessageRead: false,
      messages: [
        { id: 1, body: "how far", time: "8:21", me: false },
        { id: 2, body: "i dey", time: "8:21", me: true },
        { id: 3, body: "watin sub", time: "8:21", me: false },
        { id: 1, body: "every every", time: "8:21", me: true },
      ]
    }
  ];

  get filteredConversations() {
    return this.conversations.filter((conversation) => {
      return (
        conversation.name
          .toLowerCase()
          .includes(this.searchText) ||
        conversation.latestMessage
          .toLowerCase()
          .includes(this.searchText) 
      )  
    });
  };
  constructor() { }

  ngOnInit(): void {
  }

}
